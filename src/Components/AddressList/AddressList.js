import React from 'react';

const AddressList = () => {
    return <section className="card">
        <div className="card-body">
            <h4><b>Ev</b></h4>

            <div className="text-secondary mt-3"><b>Muhsin Deniz</b></div>

            <p className="mt-1">
                Yeni Mahalle Ahmet Rasim Sokak Ev No: 141 Hatay / Samadağ
            </p>

            <div>
                Hatay / Samandağ
            </div>

            <h5 className="mt-2"><b>05457250440</b></h5>

            <div className="d-flex justify-content-end">
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-success" style={{ marginLeft: "10px" }}>Edit</button>
            </div>
        </div>
    </section>;
};

export default AddressList;
