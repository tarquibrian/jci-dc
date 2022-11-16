import Dashboard from "../../components/Dashboard/Dashboard";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
  uploadBytesResumable,
} from "firebase/storage";
import { storage, firestore } from "../../config/firebase-config";
import { v4 } from "uuid";
import pdfImg from "../../images/pdf-icon.png";
import { ActasSection, Files__Container, File__Card } from "./ActasStyles";
const Actas = () => {

  const [nameFile, setNameFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [imagesUrl, setImagesUrl] = useState([]);

  const imagePath = ref(storage, `actas/`);

  useEffect(() => {
    return () => {
      setImagesUrl([]);
      listAll(imagePath).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            // console.log(item.name);
            setImagesUrl((prev) => [...prev, { url: url, name: item.name }]);
            // console.log(imagesUrl)
          });
        });
      });
    };
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
    // getFiles();
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `actas/${nameFile}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImagesUrl((prev) => [...prev, { downloadURL, name: nameFile }]);
        });
      }
    );
    setNameFile("");
  };

  // const getFiles = () => {
  //   listAll(imagePath).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         console.log(url);
  //         setImagesUrl((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // };

  return (
    <>
      <Dashboard>
        <ActasSection>
          {/* <Actas__Header>
            
          </Actas__Header> */}
          <h1>ACTAS</h1>
          <>
            <form onSubmit={handleUpload}>
              <input type="file" accept="application/pdf" />
              <br />
              <input
                type="text"
                name="text"
                id="text"
                placeholder="nombre"
                value={nameFile}
                onChange={(e) => setNameFile(e.target.value)}
              />
              {/* <input type="text" name="nombre" placeholder="nombra tu archivo" /> */}
              <button>Enviar </button>
            </form>
            <hr />
            <h2>Uploading done {progress}%</h2>
          </>
          <h2>LIST</h2>
          {/* <br /> */}

          

          <Files__Container>
            {imagesUrl.map(({ url, name }, i) => {
              return (
                <File__Card key={i}>
                  <a href={url} target="_blanck">
                    <img src={pdfImg} alt="pdf image" />
                  </a>
                  {name}
                </File__Card>
              );
            })}
          </Files__Container>
            
          
        </ActasSection>
      </Dashboard>
    </>
  );
};

export default Actas;
