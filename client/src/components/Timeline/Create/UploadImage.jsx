import React from 'react'

import FileBase from 'react-file-base64'

function UploadImage(props) {

    return (
        <div className="border border-1 border-light d-flex justify-content-between mt-3 p-3 rounded">

            <div className={'file-input'}>

                <FileBase type="file" multiple={false}
                    onDone={({ base64 }) => props.uploadImage(base64)} />
            </div>
        </div>
    )
}

export default UploadImage