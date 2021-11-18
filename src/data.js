import sai_gon from './imgs/saigon.jpg';
import fail_img from './imgs/fail_img.jpeg';
import nuoc_mam from './imgs/nuocmam.jpeg';
import mo_hanh from './imgs/mohanh.jpeg';
import gao_tam from './imgs/gaotam.jpeg';
import suon_nuong from './imgs/suonnuong.jpeg';
import trung_op_la from './imgs/trung-op-la.jpeg';


const hints = [
  {
    id: "hint-1",
    name: 1,
    content: "Một trong những món ăn phổ biến nhất tại TP. Hồ Chí Minh (Sài Gòn)",
    imgs: [
      {
        id: 'sai-gon',
        img: sai_gon
      }
    ]
  },
  {
    id: "hint-2",
    name: 2,
    content: "Chúc bạn may mắn lần sau 😅😅😅",
    imgs: [
      {
        id: 'fail',
        img: fail_img
      }
    ]
  },
  {
    id: "hint-3",
    name: 3,
    content: "Nước mắm và mỡ hành là linh hồn của món này",
    imgs: [
      {
        id: "nuoc-mam",
        name: "Nước mắm",
        img: nuoc_mam
      },
      {
        id: "mo-hanh",
        name: "Mỡ hành",
        img: mo_hanh
      }
    ] 
  },
  {
    id: "hint-4",
    name: 4,
    content: "Nguyên liệu chính tạo nên món ăn là một loại gạo rất đặc biệt, không thể tìm thấy ở món nào khác",
    imgs: [
      {
        id: 'gao-tam',
        img: gao_tam
      }
    ]
  },
  {
    id: "hint-5",
    name: 5,
    content: "Thường ăn kèm với sườn nướng, trứng ốp la",
    imgs: [
      {
        id: "suon-nuong",
        name: "Sườn nướng",
        img: suon_nuong
      },
      {
        id: "trung-op",
        name: "Trứng ốp la",
        img: trung_op_la
      }
    ]
  },
  {
    id: "hint-6",
    name: 6,
    content: "Chúc bạn may mắn lần sau 😅😅😅",
    imgs: [
      {
        id: 'fail_2',
        img: fail_img
      }
    ]
  }
]

export default hints;
