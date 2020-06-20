var firebaseConfig = {
	apiKey: 'AIzaSyAK4vEY1l2rx_YCPNUh2vSciEnq8EoTAGE',
	authDomain: 'web-blog-test.firebaseapp.com',
	databaseURL: 'https://web-blog-test.firebaseio.com',
	projectId: 'web-blog-test',
	storageBucket: 'web-blog-test.appspot.com',
	messagingSenderId: '313900496213',
	appId: '1:313900496213:web:368a45e0040e9f03452bdc',
	measurementId: 'G-193QKXKRMN'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector('#posts-collections');

const db = firebase.firestore();

function createPost(title, time, content) {
	let div = document.createElement('div');
	div.setAttribute('class', 'col-md-4');

	let h2 = document.createElement('h2');
	let p = document.createElement('p');
	let small = document.createElement('small');

	h2.textContent = title;
	small.textContent = time;
	p.textContent = content;

	div.appendChild(h2);
	div.appendChild(small);
	div.appendChild(p);
	postCollection.appendChild(div);
}

//Get post
function getPosts() {
	db
		.collection('posts')
		.get()
		.then((snapshot) => {
			snapshot.docs.forEach((docs) => {
				createPost(docs.data().postName, docs.data().createdAt, docs.data().postContent);
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

getPosts();
