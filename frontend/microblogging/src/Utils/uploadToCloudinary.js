export const uploadToCloudinary = async (pics) => {

    if (pics) {
        const data = new FormData();
        data.append("file", pics)
        data.append("upload_preset", "preset_name");
        data.append("cloud_name", "database_name")

        const res = await fetch("https://api.cloudinary.com/v1_1/database_name/image/upload",
            {
                method: "post",
                body: data
            })

        const fileData = await res.json();
        return fileData.url.toString();
    }
    else console.log("Error from cloudinary upload function")
}