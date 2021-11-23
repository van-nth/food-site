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
    content: "是胡志明市（西贡）最受欢迎的菜之一",
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
    content: "祝你下次好运！ 😅😅😅",
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
    content: "鱼露和洋葱油是这道菜的灵魂",
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
    content: "这道菜的主要原料是一种非常特别的大米",
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
    content: "通常佐以烤排骨、煎蛋卷",
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
    content: "祝你下次好运！ 😅😅😅",
    imgs: [
      {
        id: 'fail_2',
        img: fail_img
      }
    ]
  }
]

export default hints;
