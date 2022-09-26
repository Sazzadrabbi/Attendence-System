import {
	addDoc,
	collection,
	doc,
	onSnapshot,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import {Alert} from "react-native";
import {db} from "./firebase";

export const updateStudentStatus = (data, id) => {
	return new Promise(async (resolve, reject) => {
		await updateDoc(
			doc(db, "courses", id),
			{
				students: data,
			},
			{merge: true}
		)
			.then((val) => {
				resolve(val);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const addDataToFirestore = (collectionName, info) => {
	return new Promise(async (resolve, reject) => {
		await addDoc(collection(db, collectionName), info)
			.then((data) => {
				resolve(data);
				Alert.alert("document added");
			})
			.catch((err) => {
				reject(err);
				Alert.alert("something went wrong");
			});
	});
};

export const getMatchCourses = (studentBatch, studentcourse, setMyCourses) => {
	const q = query(
		collection(db, "courses"),
		where("batch", "==", studentBatch),
		where("course", "==", studentcourse)
	);

	onSnapshot(q, (querySnapshot) => {
		let stdCourse = [];
		querySnapshot.forEach((doc) => {
			stdCourse.push({value: doc.data(), id: doc.id});
		});
		setMyCourses(stdCourse);
	});
};
