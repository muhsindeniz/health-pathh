import React from 'react'

const ExportList = (props) => {

    let { data } = props;

    return (
        <section className="p-4 border rounded mt-3 mb-3">
            <div dangerouslySetInnerHTML={{ __html: data[0].content }}></div>
        </section>
    )
}

export default ExportList