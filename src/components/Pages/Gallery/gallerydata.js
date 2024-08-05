import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
function Memoriesbook({ url }) {
  return (
    <div>
      <img className="img-responsive br-5" src={url} alt="" />
    </div>
  );
}
const Photos = ({ image, group }) => (
  <div>
    <LightgalleryItem group={group} src={image}>
      <Memoriesbook url={image} />
    </LightgalleryItem>
  </div>
);
export function Gallery2() {
  const images = [
    {
      id: "image1",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/1.jpg"),
    },
    {
      id: "image2",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/8.jpg"),
    },
    {
      id: "image3",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/4.jpg"),
    },
    {
      id: "image4",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/5.jpg"),
    },
    {
      id: "image5",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/7.jpg"),
    },
    {
      id: "image6",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/2.jpg"),
    },

    {
      id: "image7",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/4.jpg"),
    },
    {
      id: "image8",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/5.jpg"),
    },
    {
      id: "image9",
      className: "img-responsive br-5",
      src: require("../../../assets/img/media/6.jpg"),
    },
  ];
  return (
    <div id="lightgallery" className="list-unstyled row">
      <LightgalleryProvider>
        {images.map((image) => {
          return (
            <div
              className="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
              key={image.id}
            >
              <Photos image={`${image.src}`} group="group1" />
            </div>
          );
        })}
      </LightgalleryProvider>
    </div>
  );
}
