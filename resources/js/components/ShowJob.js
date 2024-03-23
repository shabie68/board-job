import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {useState, useEffect} from 'react'
import AddJob from './AddJob'
import SingleJob from './SingleJob'

function ShowJob() {


	const [addJob, setAddJob] = useState(false)
	const [jobs, setJobs] = useState([]);
	const [job, setJob] = useState(null);

	async function getJobs() {
	  const response = await fetch('http://127.0.0.1:8000/api/show-jobs');
	  const _jobs = await response.json();
	  console.log(_jobs);
	  setJobs(_jobs.jobs)
	}

	useEffect(() => {
		getJobs()

	}, [])

	async function getJob(id) {
		
		const response = await fetch('http://127.0.0.1:8000/api/single-job/'+id);
	  	const _job = await response.json();

	  	setJob(_job.job)

	}


	return(
		<div>
			{addJob ? 

				<AddJob/>
				: 
				<div className="d-flex gap-3">
					<div className="w-40" style={{width: '45%'}}>
						{jobs.map(_job => (

						  <div className={`card mb-4 ${job?.id === _job.id ? "border border-primary" : ""}`}  key={"job-"+_job.id} style={{cursor: 'pointer'}}
						  onClick={()=> {getJob(_job.id)}}>
							<h3 className="card-header">{_job.title}</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<li><h4>Description:</h4>{_job.description}</li>
									<li><h4>Responsibilities</h4>{_job.job_responsibilities}</li>
									<li><h4>Requirements</h4>{_job.job_requirements}</li>
								</ul>
							</div>
						</div>
						))}
					</div>

					{job ?
						<SingleJob job={job} setAddJob={setAddJob}/>
						: ''
					}
					
				</div>
			}
		</div>

		 
		
	)
}

export default ShowJob

/**

<div className="d-flex gap-3">
					<div className="w-40">
					
						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>

						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>

						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>

						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>
						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>
						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>
						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>
						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>
						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>
						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>

						<div className="card mb-4">
							<h3 className="card-header">Web developer</h3>
							<div className="card-body">
								<p>Will join the startup and design the website for startup. You will work with Eurpean clients</p>
								<ul>
									<h3>Experience</h3>
									<li>Laravel: 3years</li>
									<li>Vuejs: 2years</li>
									<li>ReactJs: 1year</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="w-60">
						<div className="card">
							<div className="card-header">
								<h3>Web developer</h3>
								<div className="d-flex">
									<div>
										<div>
											<strong>Karachi, Pakistan</strong>
										</div>
										
										<div>
											<strong>Freelance/Remote</strong>
										</div>
									</div>

									<div className="ms-auto">
										<button className="btn btn-secondary" onClick={()=>{setAddJob(true)}}>Apply</button>
									</div>

								</div>
							</div>
						
							<div className="card-body position-sticky">
								<p>
									We are seeking a skilled and creative Web Developer to join our dynamic team. 
									The ideal candidate will be proficient in front-end and back-end development, 
									with expertise in HTML, CSS, JavaScript, and other relevant programming languages. 
									Responsibilities include collaborating with design teams to create intuitive user interfaces, 
									optimizing website performance, and ensuring cross-browser compatibility. 

									The successful candidate will demonstrate a strong understanding of responsive design principles
									and possess excellent problem-solving abilities. If you are passionate about creating engaging
									web experiences and thrive in a fast-paced environment, we encourage you to apply.
								</p>

								<strong>Job Responsibilities</strong>
								<ol>
								    <li className="mb-2">Develop and implement responsive and user-friendly web applications, ensuring optimal functionality across various devices and browsers.</li>
								    
								    <li className="mb-2">Write clean, efficient, and well-documented code in HTML, CSS, and JavaScript, adhering to industry best practices and coding standards.</li>
								    <li className="mb-2">Conduct thorough testing and debugging of web applications to identify and resolve issues, ensuring a seamless and error-free user experience.</li>
								    <li className="mb-2">Optimize website performance, including page load times and overall responsiveness, through code and image optimization techniques.</li>
								    <li>Implement and maintain web security measures to safeguard against potential threats and vulnerabilities, ensuring the confidentiality and integrity of user data.</li>
								</ol>

								<strong>Job Requirements</strong>
								<ol>
								    <li className="mb-2">
								        <p>Strong expertise in HTML, CSS, and JavaScript, with a deep understanding of modern web development frameworks and libraries.</p>
								    </li>
								    <li className="mb-2">
								        <p>Demonstrated proficiency in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive user interfaces.</p>
								    </li>
								    <li className="mb-2">
								        <p>Solid understanding of back-end development, including server-side scripting languages (e.g., Node.js, Python, PHP) and experience with RESTful API integration.</p>
								    </li>
								    <li className="mb-2">
								        <p>Experience in ensuring cross-browser compatibility and responsiveness, with the ability to troubleshoot and resolve issues for a seamless user experience across different platforms.</p>
								    </li>
								    <li className="mb-2">
								        <p>Familiarity with version control systems, especially Git, and experience collaborating with cross-functional teams using collaborative development platforms like GitHub or Bitbucket.</p>
								    </li>
								</ol>

								<span> Salary:<b> 20000PKR-40000PKR </b></span>
								<br />
								<span>Ability to <b>relocate</b></span>
							</div>
						</div>
					</div>
**/