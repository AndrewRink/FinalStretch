import { useState, useEffect } from "react"


function NewUserForm() {

	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email_address: '',
		password_digest: '',
        height: '',
        current_weight: '',
        goal_weight: '',
        role: ''
	})

	

	async function handleSubmit(e) {
		e.preventDefault()
		await fetch(`http://localhost:5000/userlist`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
	}

	return (
		<main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="first_name">First Name</label>
						<input
							required
							value={user.first_name}
							onChange={e => setUser({ ...user, first_name: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="last_name">Last Name</label>
						<input
							required
							value={user.last_name}
							onChange={e => setUser({ ...user, last_name: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email_address">Email</label>
						<input
							type="email"
							required
							value={user.email_address}
							onChange={e => setUser({ ...user, email_address: e.target.value })}
							className="form-control"
							id="email"
							name="email"
						/>
					</div>
				<div className="col-sm-6 form-group">
					<label htmlFor="password_digest">Password</label>
					<input
						type="password"
						required
						value={user.password_digest}
						onChange={e => setUser({ ...user, password_digest: e.target.value}) }
						className="form-conrol"
						id='password'
						name='password'
					/>
				</div>
				</div>
                <div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="height">Height</label>
						<input
							type="height"
							required
							value={user.height}
							onChange={e => setUser({ ...user, height: e.target.value })}
							className="form-control"
							id="height"
							name="height"
						/>
					</div>
				<div className="col-sm-6 form-group">
					<label htmlFor="current_weight">Current Weight</label>
					<input
						type="current_weight"
						required
						value={user.current_weight}
						onChange={e => setUser({ ...user, current_weight: e.target.value}) }
						className="form-conrol"
						id='current_weight'
						name='current_weight'
					/>
				</div>
				</div>
                <div>
                <div className="col-sm-6 form-group">
					<label htmlFor="goal_weight">Goal Weight</label>
					<input
						type="goal_weight"
						required
						value={user.goal_weight}
						onChange={e => setUser({ ...user, goal_weight: e.target.value}) }
						className="form-conrol"
						id='goal_weight'
						name='goal_weight'
					/>
				</div>
                </div>
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default NewUserForm