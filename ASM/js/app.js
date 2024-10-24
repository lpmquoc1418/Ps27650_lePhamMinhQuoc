import { TinTuc_arr, coso_arr, LoaiTra_arr } from './data.js';
const hien1LoaiTra = (LoaiTra) => {
    return `<div>
     <img src="${LoaiTra.hinh}">
     <h4>${LoaiTra.tenTra} </h4>
     <p>Giá: ${LoaiTra.Gia}</p>
     <p>Ghi chú: ${LoaiTra.ghichu}</p>
    </div>`;
};
export const showlistLoaiTra = () => {
    const html_arr = LoaiTra_arr.map(hien1LoaiTra);
    return html_arr.join("");
};
// const phaicuahv = (phai) => {
//     if (typeof phai == 'boolean') {
//         if (phai == true)
//             return "Nữ";
//         else
//             return "Nam";
//     }
//     else
//         return phai;
// };
const hien1Menu = (hv) => {
    return `<div>
     <img src="${hv.hinh}">
     <h4>${hv.ten} </h4>
     <p>${hv.ghichu}</p>
    </div>`;
};
export const showlistTinTuc = () => {
    const html_arr = TinTuc_arr.map(hien1Menu);
    return html_arr.join("");
};
const hien1CoSo = (coso) => {
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
     <p>${coso.diachi}</p>
    </div>`;
};
export const showlistcoso = () => {
    const html_arr = coso_arr.map(hien1CoSo);
    return html_arr.join("");
};
const show1thuonghieu = (th) => {
    return `<div>${th.ten}</div> `;
};
export const showlistthuonghieu = async () => {
    let thuonghieu_arr = await fetch("http://localhost:3000/thuong_hieu")
        .then(res => res.json())
        .then(data => { return data; });
    let str = ``;
    thuonghieu_arr.forEach(th => str += show1thuonghieu(th));
    return str;
};
