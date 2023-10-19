import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>MainPage</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<h3><q>Hi you successfully reach the Main page</q></h3>
			
			<img src="https://th.bing.com/th/id/OIP.peXcFjbT5QE5Ez2FfuDPcgHaGt?pid=ImgDet&rs=1" alt="success"></img>
			
		</div>
	);
};

export default Main;