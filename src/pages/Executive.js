import '../styles/App.css';
import '../styles/output.css';

const executive_contents = [
  {
    id: 1,
    title: "최건웅",
    content: "회장",
    major: "소프트웨어학부",
    grade: "20학번",
    image:"profile/profile-default.png",
  },
  {
    id: 2,
    title: "홍세원",
    content: "부회장",
    major: "소프트웨어학부",
    grade: "20학번",
    image:"profile/profile-default.png",
  },
  {
    id: 3,
    title: "황연주",
    content: "총무부장",
    major: "소프트웨어학부",
    grade: "23학번",
    image:"profile/profile-default.png",
  },
  {
    id: 4,
    title: "조현우",
    content: "총무차장",
    major: "소프트웨어학부",
    grade: "23학번",
    image:"profile/profile-default.png",
  }
];

const planning_dept_members = [
  {
    id: 1,
    title: "양지웅",
    content: "기획부장",
    major: "소프트웨어학부",
    grade: "20학번",
    image:"profile/profile-default.png",
  },
  {
    id: 2,
    title: "정현주",
    content: "기획부원",
    major: "소프트웨어학부",
    grade: "23학번",
    image:"profile/profile-default.png",
  }
]

const promotion_dept_members = [
  {
    id: 1,
    title: "윤신지",
    content: "홍보부장",
    major: "소프트웨어학부",
    grade: "22학번",
    image:"profile/profile-default.png",
  },
  {
    id: 2,
    title: "김선우",
    content: "홍보부원",
    major: "소프트웨어학부",
    grade: "20학번",
    image:"profile/profile-default.png",
  }
]

const editorial_dept_members = [
  {
    id: 1,
    title: "조원재",
    content: "편집부장",
    major: "소프트웨어학부",
    grade: "23학번",
    image:'profile/jowonjae.jpg',
  },
  {
    id: 2,
    title: "한여진",
    content: "편집부원",
    major: "소프트웨어학부",
    grade: "23학번",
    image:"profile/profile-default.png",
  }
]

function OpeningCard(props) {

  return (
    <div className="business_card_elements justify-center">
        <img src={props.faces} alt="person" className='w-full rounded-lg' style={{height: 'auto', alignSelf: 'flex-start' }} />
      <div className="top" style={{ textAlign: 'right', color: 'black' }}>
        <h1 className="text-xl font-bold"> {props.title}</h1>
      </div>
      <div className="bottom"style={{ textAlign: 'right',color: 'black', fontSize:15  }}>
        <p className="font-semibold">
          {props.content}</p>
        <p className="font-light">
        {props.grade}</p>
        <p className="font-light">
        {props.major}</p>
      </div>
    </div>
  );
}



function Executive()
{

  const lis = executive_contents.map((content) => (
    <OpeningCard
      faces={content.image}
      key={content.id}
      title={content.title}
      content={content.content}
      grade={content.grade}
      major={content.major}
    />
  ));

  const lis2 = planning_dept_members.map((content) => (
    <OpeningCard
      faces={content.image}
      key={content.id}
      title={content.title}
      content={content.content}
      grade={content.grade}
      major={content.major}
    />
  ));

  const lis3 = promotion_dept_members.map((content) => (
    <OpeningCard
      faces={content.image}
      key={content.id}
      title={content.title}
      content={content.content}
      grade={content.grade}
      major={content.major}
    />
  ));
  const lis4 = editorial_dept_members.map((content) => (
    <OpeningCard
      faces={content.image}
      key={content.id}
      title={content.title}
      content={content.content}
      grade={content.grade}
      major={content.major}
    />
  ));

    return (
        <div className="items-center bg-stone-950">
          <div className='App-header'>
            <div className='text-center w-1/2 md:w-1/5'>
                <img className='w-full' alt='brick' src='img/koss_text.png'></img>
            </div>
            <div className='font-black text-2xl text-center tracking-tight md:text-4xl'>
              <h1>KOSS와 동행하는 가장 좋은 방법,</h1>
              <h1>2024 KOSS 운영진</h1>
            </div>
          </div>
          

          <div className='text-center App-header'>
            <div className="w-1/3">
              <img src='img/KOSS_bg.jpg' alt='KOSS_executives_pic' className='w-full' />
            </div>
            <div className="executive_i1">
              <h3>운영진을 소개합니다!</h3>
            </div>
            <div className='mt-16 text-center inline-grid gap-8 grid-cols-4 xl:grid-cols-4'>
              {lis}
            </div>
            <div className='text-left'>
              <div className='mt-16 inline-grid gap-8 grid-cols-2 xl:grid-cols-2'>
                {lis2}
              </div>
            </div>
            <br></br>
            <div className='mt-16 text-center inline-grid gap-8 grid-cols-2 xl:grid-cols-2'>
              {lis3}
            </div>
            <br></br>
            <div className='mt-16 text-center inline-grid gap-8 grid-cols-2 xl:grid-cols-2'>
              {lis4}
            </div>
          </div>
        </div>
      )
}

export default Executive;