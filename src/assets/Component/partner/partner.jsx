import React from "react";
import "../../SCSS/reset.scss";
import "../../Component/partner/partner.scss";
import hanh from "../../img/hanh.jpg";
import hai from "../../img/hai.jpg";
import canh from "../../img/canh.jpg";
export default function PartnerComponent(){
    return (
        <>
            <div id="global-partner">
                <h1 className="text-4xl font-bold">Nhóm 02_Dự án Khoa học Công nghệ</h1>
                <h3 className="text-xl font-bold">Bùi Công Anh</h3>
                <h3 className="text-xl font-bold">Nguyễn Phương Hoàng Anh</h3>    
                <h3 className="text-xl font-bold">Mai Lý Hải</h3>        
                <br />
                <div className="partner-container flex justify-center">
                    <img src={hanh} alt="" />
                    <img src={hai} alt="" />
                    <img src={canh} alt="" />
                </div>
            </div>
        </>
    )
}
