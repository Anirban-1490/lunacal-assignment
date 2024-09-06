"use client";

import { Divider } from "@/components/line-divider";
import { NavMenu } from "@/components/nav-menu";
import { WidgetGeneric } from "@/components/widget-generic/indes";

import { Carousel } from "@/components/carousel";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { SwiperContainer } from "swiper/element";
import { getImagesFromLocal, setImageInLocal } from "@/utils/getImages";
export default function Home() {
  const sliderRef = useRef<SwiperContainer>();
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    setImages(getImagesFromLocal());
  }, []);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef?.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef?.current.swiper.slideNext();
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const imageFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (ev) => {
      const imageURL = ev.target?.result as string;
      setImageInLocal(imageURL);
      setImages((prev) => [...prev, imageURL]);
    };
    fileReader.readAsDataURL(imageFile);
  };

  return (
    <main className=" min-h-screen flex py-[6rem]">
      <section className=" flex-1 hidden  md:block"></section>
      <section className=" basis-[50%]  flex flex-col items-center gap-6 ">
        <WidgetGeneric>
          <>
            <NavMenu />
            <p className="font-normal text-[#969696] text-[1.1rem]">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
            <p className="font-normal text-[#969696] text-[1.1rem]">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </>
        </WidgetGeneric>
        <Divider />
        <WidgetGeneric>
          <>
            <div className=" flex gap-[8rem] items-center ">
              <div className=" w-fit px-[3rem] py-[1.2rem] bg-blk-900 rounded-3xl">
                <h2 className="text-[1.3rem]">Gallery</h2>
              </div>
              <div className="flex-1 flex gap-5 items-center">
                <input
                  hidden
                  type="file"
                  name="upload-image"
                  id="upload__image"
                  onChange={handleImageUpload}
                />
                <label
                  className=" cursor-pointer uppercase block w-fit px-[1.7rem] py-[1rem] rounded-3xl shadow-[0.3rem_0.5rem_4px_rgba(0,0,0,0.24),-0.2rem_-0.3rem_4px_rgba(255,255,255,0.20),inset_0rem_0.2rem_4px_rgba(255,255,255,0.15)] "
                  htmlFor="upload__image"
                >
                  + Add Image
                </label>
                <div>
                  <button onClick={handlePrev} className="button-prev mr-4 ">
                    <ArrowLeftOutlined className=" text-[1.2rem] mx-auto block text-[#6F787C]" />
                  </button>
                  <button onClick={handleNext} className="button-next">
                    <ArrowRightOutlined className=" text-[1.2rem] mx-auto block text-[#6F787C]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full">
              <Carousel images={images} ref={sliderRef} />
            </div>
          </>
        </WidgetGeneric>
        <Divider />
      </section>
    </main>
  );
}
