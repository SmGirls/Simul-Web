import React from 'react'
import './ItemCsvUpload.css'
import axios from 'axios'


function ItemCsvUpload() {
  function uploadCsvFile(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('fileUpload');
  
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
      <div class="item-csv-upload">
        <input type="file" id="fileUpload" />
        <button class="btn-item-csv-upload" onClick={uploadCsvFile}>
          import item csv
        </button>
      </div>
    </>
  )
}

export default ItemCsvUpload
