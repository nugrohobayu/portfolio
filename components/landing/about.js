import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { Button, Image } from "antd";
import React from "react";

function About() {
    return (
        <div className="grid bg-mint-secondary justify-between lg:px-28 xl:px-28 py-10 sm:px-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="">
                <h1 className="text-khaky-primary font-serif font-bold">
                    Hi, I am Dian Bayu Nugroho
                </h1>
                <p className="text-gray-800 font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <Button className="bg-khaky-primary text-white my-6 font-semibold border-none rounded-3xl" >Hire me</Button>
                <div className="flex flex-col mb-4">
                    {/* <div className="rounded-full bg-khaky-primary w-14 h-14 text-white">F</div>
            <i class="fa-brands fa-facebook"></i> */}
                    {/* <StarOutlined /> */}


                </div>
            </div>
            <div className="bg-mint-primary">
                <img />
            </div>

            <div>
                <img />
            </div>

            <div>
                <h1>I am Web Developer</h1>
                <p className='text-gray-800 font-medium'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>

            </div>
        </div>
    );
}

export default About;
