import React, {useState, useEffect } from 'react'
import axios from 'axios'; 
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'

function Data() {
  const [posts,setData]=useState([]);
  useEffect(()=>{
    const fetch=async () => {
      
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const allPosts = response.data;

       
        const filteredPosts = allPosts.filter(post => post.userId === 1);

        setData(filteredPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetch();
   
  },[]);
  const totalPosts = posts.length;
  const postsByUser1 = totalPosts;
  const postsByOtherUsers = 100 - postsByUser1;
  // Chart data
  const chartData = {
    labels: ['User ID 1', 'Other Users'],
    datasets: [
      {
        data: [postsByUser1, postsByOtherUsers],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
  };
   return (
    <div className='text-white ' >
       <h1>Posts with User ID 1</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Pie Chart: Percentage of Posts by User ID 1</h2>
        <Pie data={chartData} options={chartOptions}  />
      </div>
    </div>
  )
}

export default Data
 