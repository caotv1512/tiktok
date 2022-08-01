import { useEffect, useLayoutEffect, useState } from 'react';

function Content() {
  //   const tabs = ['posts', 'comments', 'albums'];
  //   const [title, setTitle] = useState('');
  //   const [posts, setPost] = useState([]);
  //   const [type, setType] = useState('posts');
  //   const [showGoToTop, setShowGoToTop] = useState(false);
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //       .then((res) => res.json())
  //       .then((posts) => {
  //         setPost(posts);
  //       });
  //   }, [type]);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY >= 200) {
  //         setShowGoToTop(true);
  //       } else {
  //         setShowGoToTop(false);
  //       }
  //     };
  //     window.addEventListener('scroll', handleScroll);
  //     return()=>{
  //         window.removeEventListener('scroll', handleScroll);
  //     }
  //   }, []);
  //   return (
  //     <div>
  //       {tabs.map((tab) => (
  //         <button
  //           key={tab}
  //           style={
  //             type === tab
  //               ? {
  //                   color: '#fff',
  //                   backgroundColor: '#333',
  //                 }
  //               : {}
  //           }
  //           onClick={() => setType(tab)}
  //         >
  //           {tab}
  //         </button>
  //       ))}
  //       <input value={title} onChange={(e) => setTitle(e.target.value)} />
  //         {posts.map((post) => (
  //           <li key={post.id}>{post.title || post.name}</li>
  //         ))}
  //       {showGoToTop && (
  //         <button
  //         style={{
  //             position: 'fixed',
  //             right: 20,
  //             bottom: 20
  //         }}
  //         >
  //             Go to Top
  //         </button>
  //       )}
  //     </div>
  //   );
  //   =====================useEffect DOM event=================
  //   const [width, setWith] = useState(window.width);
  //   useEffect(() => {
  //     const handleResize = () => {
  //         setWith(window.innerWidth)
  //     };
  //     window.addEventListener('resize', handleResize);
  //     return()=>{
  //         window.removeEventListener('resize', handleResize);
  //     }
  //   });
  //   return (
  //     <div>
  //       <h1>{width}</h1>
  //     </div>
  //   );
  //   =====================useEffect timer function=================
  //   const [countdown, setCountdown] = useState(180);
  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       setCountdown((prevState) => prevState - 1);
  //       console.log('dmmmmmmm');
  //     }, 1000);
  //     return () => clearInterval(timerId);
  //   }, []);
  //   return (
  //     <div>
  //       <h1>{countdown}</h1>
  //     </div>
  //   );
  //   =====================useEffect preview avatar=================
  //   const [avatar, setAvatar] = useState();
  //   useEffect(() => {
  //     return () => {
  //      avatar && URL.revokeObjectURL(avatar.preview);
  //     };
  //   }, [avatar]);
  //   const handlePreviewAvatar = (e) => {
  //     const file = e.target.files[0];
  //     file.preview = URL.createObjectURL(file);
  //     setAvatar(file);
  //     console.log(file);
  //   };
  //   return (
  //     <div>
  //       <input type="file" onChange={handlePreviewAvatar} />
  //       {avatar && <img src={avatar.preview} att="" width="80%" />}
  //     </div>
  //   );

  //   =====================useEffect Chat=================

  //   const lessons = [
  //     { id: 1, name: 'ReactJS' },
  //     { id: 2, name: 'NodeJS' },
  //     { id: 3, name: 'FullStack' },
  //   ];

  //   const [lessonId, setLessonId] = useState(1);

  //   useEffect(()=>{
  //     const handleComment = ({detail}) =>{
  //         console.log(detail);
  //     }
  //     window.addEventListener(`lesson-${lessonId}`, handleComment)

  //     return()=>{
  //         window.removeEventListener(`lesson-${lessonId}`, handleComment)
  //     }
  //   }, [lessonId])

  //   return (
  //     <div>
  //       <ul>
  //         {lessons.map((lesson) => (
  //           <li
  //             key={lesson.id}
  //             style={{
  //               color: lessonId === lesson.id ? 'red' : '#333',
  //             }}
  //             onClick ={()=> setLessonId(lesson.id)}
  //           >
  //             {lesson.name}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);
  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default Content;
