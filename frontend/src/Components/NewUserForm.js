import { useState, useEffect } from "react"
 import { useNavigate, useParams } from "react-router-dom"

function NewUserForm() {

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
        height: '',
        current_weight: '',
        goal_weight: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/userlist/`, {
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
						<label htmlFor="firstName">First Name</label>
						<input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, firstName: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							className="form-control"
							id="email"
							name="email"
						/>
					</div>
				<div className="col-sm-6 form-group">
					<label htmlFor="password">Password</label>
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
					<label htmlFor="current_weight">Current_Weight</label>
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
					<label htmlFor="goal_weight">Current_Weight</label>
					<input
						type="goal_weight"
						required
						value={user.current_weight}
						onChange={e => setUser({ ...user, current_weight: e.target.value}) }
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