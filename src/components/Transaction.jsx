import React, { useState, useRef, useEffect } from 'react';
import jsQR from 'jsqr';
import '../styles/Transaction.css';

function Transaction() {
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [scanning, setScanning] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (scanning) {
      const constraints = { video: { facingMode: 'environment' } };
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          requestAnimationFrame(tick);
        })
        .catch((err) => {
          console.error("Error accessing the camera", err);
        });
    } else if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, [scanning]);

  const tick = () => {
    if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      canvasRef.current.height = videoRef.current.videoHeight;
      canvasRef.current.width = videoRef.current.videoWidth;
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageData = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });
      
      if (code) {
        setProductCode(code.data);
        setScanning(false);
      } else {
        requestAnimationFrame(tick);
      }
    } else {
      requestAnimationFrame(tick);
    }
  };

  const handleTransaction = (type) => {
    console.log(`${type} transaction for product ${productCode} with quantity ${quantity}`);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="transaction">
      <h1>Transaction</h1>
      {scanning ? (
        <div className="scanner">
          <video ref={videoRef} />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      ) : (
        <button onClick={() => setScanning(true)}>Scan QR Code</button>
      )}
      <div className="manual-input">
        <input
          type="text"
          placeholder="Product Code"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="transaction-buttons">
        <button onClick={() => handleTransaction('Inbound')}>Inbound</button>
        <button onClick={() => handleTransaction('Outbound')}>Outbound</button>
      </div>
    </div>
  );
}

export default Transaction;