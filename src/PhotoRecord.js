import React from 'react'
import { useRef, useEffect} from 'react'

const PhotoRecord = ({ record, onPhoto }) => {
    const photoRef = useRef(null)
    const videoRef = useRef(null)

      useEffect(() => {
        const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 300 } })
            .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
            })
            .catch(err => {
            console.error("error:", err);
            });
        };
        getVideo()

      }, [])


  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
    }, 200);
  };

  function takePhoto() {
    const data = photoRef.current.toDataURL('image/jpeg')
    
    onPhoto(data)
  }

    return (
        <>
            <video onCanPlay={paintToCanvas} ref={videoRef} />
            <canvas ref={photoRef} id='photo-canvas' />
            <button onClick={takePhoto}>take a photo</button>
        </>
    )
}

export default PhotoRecord
