import JosephAbout from '../assets/JosephAbout.jpg';

export default function About() {
  return (<>
  <div className="pt-12 px-2 flex flex-row items-center justify-center min-h-screen gap-8">
        <img src={JosephAbout.src} alt="Joseph" className="w-64 h-64 object-cover rounded-xl shadow-lg" />
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-4">About <span className="text-primary dark:text-primarydark">Joseph</span></h1>
          <div className="bg-overlay dark:bg-overlaydark p-6 rounded-lg shadow-lg">
            <p>1 .| Hello My Name Is Joseph.<br />2.| I am a ten year old boy who loves coding.<br />3.| At The time of the year 2025 I am in 5th Grade in Churchville Public school in  <a href="https://maps.app.goo.gl/Rya81T48fkjrTfBM8" className='text-primary dark:text-primarydark'>Brampton, Ontario</a><br />4.| My Favourite Subjects are Gym, Science and Math<br />5.| I wear glasses but this is just an old picture<br/>6.| I am not very athletic but I am smart.<br />7.| and I love to learn new things.</p>
          </div>
        </div>
    </div>
  </>);
}