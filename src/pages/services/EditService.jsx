import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import { imageUpload } from "../../api/utils";
import { apiUrl } from "../../hooks/userServerAPI";

const EditService = () => {
  // const { user } = useAuth();
  const [prevImg, setPrevImg] = useState();
  const getServiceData = useLoaderData();
  const { _id, title, description, category, area, price, image } =
    getServiceData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const area = form.area.value;
    const price = parseFloat(form.price.value);
    const image = form.image.files[0];
    try {
      const img_url = image ? await imageUpload(image) : prevImg;
      const service = {
        title,
        description,
        category,
        area,
        price,
        image: img_url,
      };
      const { data } = await axios.patch(
        `${apiUrl}/services/update/${_id}`,
        service
      );
      toast.success(`${title} updated successfully`, data);
      form.reset();
      <Navigate to={`/manage-services`} />;
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    setPrevImg(image);
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>Edit {title} Service</title>
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
                    defaultValue={title}
                  />
                </div>
                <div className="grp-col">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    className="frm-ctr"
                    placeholder="Enter your service description"
                    rows={6}
                    defaultValue={description}
                  ></textarea>
                </div>
                <div className="grp-col">
                  <label htmlFor="area">Area</label>
                  <input
                    type="text"
                    name="area"
                    className="frm-ctr"
                    placeholder="Enter your service area"
                    defaultValue={area}
                  />
                </div>
                <div className="grp-col">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    name="price"
                    className="frm-ctr"
                    placeholder="Enter your service price"
                    defaultValue={price}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="grp-col">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    className="frm-ctr"
                    defaultValue={category}
                  >
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

export default EditService;
