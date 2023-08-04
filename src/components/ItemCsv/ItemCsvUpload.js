import React from 'react'
import './ItemCsvUpload.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function ItemCsvUpload() {
  function uploadCsvFile(e) {
    e.preventDefault();

    const fileInput = document.getElementById('chooseFile');

    const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);


      try {
        // axios를 사용하여 파일 업로드 요청
        const response = await axios.post('http://localhost:7000/upload', formData);
        const data = response.data;
        alert(JSON.stringify(`${data.message}, status: ${response.status}`));


        // 업로드 성공 후 이동할 경로
        if (response.status === 200) {
          window.location.href = '/item-table';
        }
      } catch (error) {
        console.error('파일 업로드 실패:', error);
      }
    };
    onSubmit(); // 파일 업로드 요청

  }

  return (
    <>

      <div className="csv-input-header">
        <h1 className="container item-header-title">물류 입력</h1>
      </div>


      <div class="upload-box">
        <div id="drop-file" class="drag-file">
          <img src="https://img.icons8.com/pastel-glyph/2x/image-file.png" alt="파일 아이콘" class="image" />
          <p class="message">files to upload</p>
          <p className='main'>Support Files CSV</p>
          <label class="file-label" for="chooseFile">Choose File</label>
          <input class="file" id="chooseFile" type="file" />
          <button class="btn-item-csv-upload" onClick={uploadCsvFile}>
            <i><FontAwesomeIcon icon={faPlus} /></i>
            csv upload
          </button>
        </div>
      </div>
    </>



  )
}

export default ItemCsvUpload
