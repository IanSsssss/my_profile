export default function BookCardList({
  category,
}: {
  category: "tech" | "nontech";
}) {
  const techBookList: {
    img: string;
    name: string;
    nameEn: string;
    author: string;
  }[] = [
    {
      img: "https://img3m7.ddimg.cn/78/21/11834242377-1_w_1725709049.jpg",
      name: "代码大全",
      nameEn: "Code Complete",
      author: "Steve McConnell",
    },
    {
      img: "https://img3m5.ddimg.cn/79/3/25347445-1_w_4.jpg",
      name: "数据密集型应用系统设计",
      nameEn: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
    },
    {
      img: "https://img3m6.ddimg.cn/6/3/11952357126-1_w_1744310684.jpg",
      name: "重构",
      nameEn: "Refactoring",
      author: "Martin Fowler",
    },
    {
      img: "https://img3m3.ddimg.cn/93/26/11653019823-1_w_1739345541.jpg",
      name: "深入理解计算机系统",
      nameEn: "Computer Systems",
      author: "Randal E. Bryant / David O Hallaron",
    },
    {
      img: "https://img3m0.ddimg.cn/7/29/11902056910-1_w_1739160694.jpg",
      name: "MongoDB实战",
      nameEn: "MongoDB in Action",
      author: "Kyle Banker",
    },
    {
      img: "https://img3m5.ddimg.cn/76/1/29127955-1_w_3.jpg",
      name: "Rust程序设计",
      nameEn: "Programming Rust: Fast, Safe Systems Development",
      author: "Jason Orendorff",
    },
    {
      img: "https://img3m3.ddimg.cn/75/34/24035493-1_w_8.jpg",
      name: "代码整洁之道",
      nameEn: "Clean Code",
      author: "Robert C. Martin",
    },

    {
      img: "https://img3m9.ddimg.cn/93/16/11791192539-1_w_1723013356.jpg",
      name: "微服务架构设计模式",
      nameEn: "Microservices Patterns",
      author: "Chris Richardson",
    },

    {
      img: "https://img3m2.ddimg.cn/62/29/11770260542-1_w_1719058424.jpg",
      name: "程序员修炼之道",
      nameEn: "The Pragmatic Programmer",
      author: "Andrew Hunt / David Thomas",
    },
  ];
  const nonTechBookList: {
    img: string;
    name: string;
    nameEn: string;
    author: string;
  }[] = [
    {
      img: "https://img3m9.ddimg.cn/32/11/29730029-1_w_1716430497.jpg",
      name: "阅读你的症状",
      nameEn: "Jacques Lacan: Read Your Symptoms",
      author: "吴琼 Qiong Wu",
    },
    {
      img: "https://img3m8.ddimg.cn/31/18/21043768-1_w_2.jpg",
      name: "斜目而视:透过通俗文化看拉康",
      nameEn: "Looking away:An introduction to Lcan through popular Culture",
      author: "Slavoj Žižek",
    },
    {
      img: "https://img3m3.ddimg.cn/70/20/11527962703-1_w_1694335619.jpg",
      name: "禅与摩托车维修艺术",
      nameEn: "Zen and the Art of Motorcycle Maintenance",
      author: "Robert M. Pirsig",
    },
    {
      img: "https://img3m8.ddimg.cn/97/17/29196088-1_w_2.jpg",
      name: "存在主义心理治疗",
      nameEn: "Existential Psychotherapy",
      author: "Irvin Yalom",
    },
    {
      img: "https://img3m4.ddimg.cn/81/33/25198254-1_w_1691488226.jpg",
      name: "存在主义咖啡馆",
      nameEn: "At the Existentialist Café",
      author: "Sarah Bakewell",
    },
    {
      img: "https://img3m7.ddimg.cn/4/30/11808666247-1_w_1725858239.jpg",
      name: "智人之上",
      nameEn: "Nexus",
      author: "Yuval Noah Harari",
    },
    {
      img: "https://img3m1.ddimg.cn/71/5/12313609181-1_w_1743401738.jpg",
      name: "今日简史",
      nameEn: "21 Lessons for the 21st Century",
      author: "Yuval Noah Harari",
    },
    {
      img: "https://img3m3.ddimg.cn/57/11/11232671133-1_w_1739168095.jpg",
      name: "人类简史",
      nameEn: "Sapiens",
      author: "Yuval Noah Harari",
    },
    {
      img: "https://img3m0.ddimg.cn/48/14/11897597100-1_w_1737309873.jpg",
      name: "西方文化的传统与演进",
      nameEn: "The Origins and Develop of Western Culture",
      author: "Lin Zhao",
    },
    {
      img: "https://img3m3.ddimg.cn/46/30/29639953-1_w_1701244437.jpg",
      name: "我们为什么会抑郁：哀悼、忧郁与精神分析",
      nameEn: "The New Black: Mourning, Melancholia, and Depression",
      author: "Darian Leader",
    },
  ];

  const bookList = category === "tech" ? techBookList : nonTechBookList;

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {bookList.map((book, index) => (
          <BookCard
            key={index}
            img={book.img}
            name={book.name}
            nameEn={book.nameEn}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
}

function BookCard({
  img,
  name,
  nameEn,
  author,
}: {
  img: string;
  name: string;
  nameEn: string;
  author: string;
}) {
  return (
    <div className="relative w-[200px] h-[300px] rounded-xl bg-white overflow-hidden shadow-md group cursor-pointer transition-colors duration-300 hover:bg-slate-700">
      {" "}
      {/* 封面图 */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={img}
          alt={nameEn}
          className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
        <h3 className="text-white text-lg font-bold">
          {name + " - " + nameEn}
        </h3>
        <p className="text-orange-400 text-sm">{author}</p>
      </div>
    </div>
  );
}
