import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { imageUpload } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import { apiUrl } from "../../hooks/userServerAPI";

const AddService = () => {
  const { user } = useAuth();
  const [prevImg, setPrevImg] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const area = form.area.value;
    const price = parseFloat(form.price.value);
    const image = form.image.files[0];
    if (!image || image.size < 0 || prevImg.size < 0)
      return toast.error("Please select and image");
    try {
      const img_url = await imageUpload(image);
      const service = {
        title,
        description,
        category,
        area,
        price,
        image: img_url,
        user: {
          email: user?.email,
          name: user?.displayName,
        },
      };
      const { data } = await axios.post(`${apiUrl}/services`, service);
      toast.success(`${title} successfully added`, data);
      form.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="">
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <div className="container">
        <h1 className="sec-heading text-center pt-10">Add Service</h1>
        <div className="w-full min-h-full">
          <form onSubmit={handleSubmit} className="w-full min-h-full">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <div className="grp-col">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="frm-ctr"
                    placeholder="Enter your service title"
                    required
                  />
                </div>
                <div className="grp-col">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    className="frm-ctr"
                    placeholder="Enter your service description"
                    required
                    rows={6}
                  ></textarea>
                </div>
                <div className="grp-col">
                  <label htmlFor="area">Area</label>
                  <input
                    type="text"
                    name="area"
                    className="frm-ctr"
                    placeholder="Enter your service area"
                    required
                  />
                </div>
                <div className="grp-col">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    name="price"
                    className="frm-ctr"
                    placeholder="Enter your service price"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="grp-col">
                  <label htmlFor="category">Category</label>
                  <select name="category" className="frm-ctr">
                    <option value="AC Repair Services">
                      AC Repair Services
                    </option>
                    <option value="Appliance Repair">Appliance Repair</option>
                    <option value="Cleaning Solution">Cleaning Solution</option>
                    <option value="Beauty & Wellness">Beauty & Wellness</option>
                    <option value="Maid Service">Maid Service</option>
                    <option value="Shifting">Shifting</option>
                  </select>
                </div>
                <div className="grp-col">
                  <label
                    htmlFor="image"
                    className="bg-primary/20 p-5 rounded-lg cursor-pointer"
                  >
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                      className="hidden w-36 mt-5"
                      onChange={(e) =>
                        setPrevImg(URL.createObjectURL(e.target.files[0]))
                      }
                      // required
                    />
                    <div className="bg-primary text-white p-2 rounded-lg cursor-pointer">
                      Upload Image
                    </div>
                    {prevImg && (
                      <img
                        src={prevImg}
                        alt="prevImg"
                        className="rounded-2xl overflow-hidden w-full h-40 object-cover mt-5"
                      />
                    )}
                  </label>
                </div>
                <div>
                  <button type="submit" className="btn">
                    Add Service
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
