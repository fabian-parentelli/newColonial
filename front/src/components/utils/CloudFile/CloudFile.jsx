import './cloudFile.css';
import { useState, useRef, useEffect } from 'react';

const CloudFile = ({ onChange, folderName, contClass, img = [] }) => {
    
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (Array.isArray(img) && img.length > 0) {
            const initialImages = img.map(url => ({ url, type: 'image' }));
            setImages(initialImages);
        };
    }, [JSON.stringify(img)]);

    const handleImgChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const newFiles = [...files, ...selectedFiles];
        newFiles.sort((a, b) => a.name.localeCompare(b.name));
        setFiles(newFiles);

        const filePreviews = newFiles
            .filter(file => file.type.startsWith("image/"))
            .map(file => ({ url: URL.createObjectURL(file), type: "image" }));

        setImages(filePreviews);

        const formData = new FormData();
        newFiles.forEach(file => formData.append("files", file));
        formData.append("folderName", folderName);
        onChange(formData);
    };

    const handleClick = () => fileInputRef.current.click();

    return (
        <div className={`cloudFile ${contClass}`} onClick={handleClick}>
            <input
                type="file"
                name="files"
                accept="image/*"
                className="file-inside"
                hidden
                ref={fileInputRef}
                multiple
                onChange={handleImgChange}
            />

            {images.length > 0 ? (
                <div className="image-container">
                    {images.map((file, index) => (
                        <img
                            key={index}
                            src={file.url}
                            className={images.length === 1 ? "imgFile" : "thumbnail"}
                            alt={`preview-${index}`}
                        />
                    ))}
                </div>
            ) : (
                <img src="/logo.png" alt="img" className="cloudUploadIcon" />
            )}
        </div>
    );
};

export default CloudFile;