 import { openUploadWidget } from "../../utils/Cloudinary";

const CloudinaryUpload = (props) => {
  const uploadImageWidget = () => {
    console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dpf7z3ldu",
        uploadPreset: "cohjobzu",
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
         props.setUrl(result.info.secure_url);
         console.log(result.info)
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="greenButton bg-green-500 p-2 my-2" onClick={uploadImageWidget}>
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
