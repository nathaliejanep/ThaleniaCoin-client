import React from 'react';
import { useAuth } from '../hooks/AuthProvider';

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure qui
        accusantium doloribus, impedit corporis quia autem quidem et dolores
        harum quis possimus, laudantium non ea in. Mollitia, vero doloremque
        distinctio possimus, iste ea totam sint dolores unde id laboriosam. Ex
        necessitatibus eaque quas assumenda debitis mollitia, atque aliquam
        rerum id repellat nostrum animi illum aut optio quasi porro tempore
        suscipit quia. Dolorum, libero tempora sed mollitia adipisci ullam
        doloremque facere labore pariatur vitae natus recusandae ipsum saepe
        harum architecto deleniti odit accusantium nihil culpa iste. In maxime
        sequi explicabo laboriosam eum cupiditate, exercitationem eos ea,
        voluptate blanditiis, illo veniam totam deleniti a voluptatem nostrum
        ipsum? Quibusdam excepturi nisi natus consectetur id ipsa nesciunt eaque
        ducimus quos delectus! Asperiores corrupti quaerat aperiam mollitia aut
        nihil perspiciatis expedita officia quae. Similique deserunt adipisci
        quam, corrupti quaerat quae facere magnam libero culpa nesciunt, minima,
        dicta recusandae! Quia, voluptas accusantium? Reprehenderit,
        consequuntur voluptatibus?
      </p>
    </>
  );
};

export default Dashboard;
