import visionIMG from "../../images/About-Us-Page/amnet-about-us-vision.jpg";
import missionIMG from "../../images/About-Us-Page/amnet-about-us-mission.jpg";

const dataLabelingData = [
    {
        id : "data-management",
        name : "data-management",
        title : "Image Annotation",
        description : "Human-assisted annotation approach to deliver higher quality data guaranteeing excellent machine learning experience. We support 2D and 3D Bounding Boxes, Labelling, Semantic Segmentation, Polygon, Polyline, Landmark and Keypoint Annotation..",
        imgSrc : missionIMG
    },
    {
        id : "data-management-1",
        name : "data-management",
        title : "Video Annotation",
        description : "Annotation by capturing objects in a video frame-by-frame and reconstructing after completion improving object tracking and video labelling. We support 2D and 3D Bounding Boxes, Semantic Segmentation, Polygon & Landmark Video Annotation.",
        imgSrc :visionIMG
    },
    {
        id : "advanced-analytics",
        title : "Vision",
        description : "Annotation by capturing objects in a video frame-by-frame and reconstructing after completion improving object tracking and video labelling. We support 2D and 3D Bounding Boxes, Semantic Segmentation, Polygon & Landmark Video Annotation.",
        imgSrc : visionIMG
    }
];

export default dataLabelingData;