function SingleJob(props) {

	return (
		<div className="w-50 position-fixed end-0" style={{top: '80px'}} >
			<div className="card">
				<div className="card-header">
					<h3>{props?.job.title}</h3>
					<div className="d-flex">
						<div>
							<div>
								<strong>{props?.job.location}</strong>
							</div>
							
							<div>
								<strong>{props?.job.job_type}</strong>
							</div>
						</div>

						<div className="ms-auto">
							<button className="btn btn-secondary" onClick={()=>{props?.setAddJob(true)}}>Apply</button>
						</div>
					</div>
				</div>
			
				<div className="card-body position-sticky">
					<p>{props?.job.description}</p>

					<strong>Job Responsibilities</strong>
					<p>{props?.job.job_responsibilities}</p>

					<strong>Job Requirements</strong>
					<p>{props?.job.job_requirements}</p>

					<span> Salary:<b> {props?.job.salary} </b></span>
					<br />
					<span>Ability to <b>relocate</b></span>
				</div>
			</div>
		</div>
	)
}

export default SingleJob;