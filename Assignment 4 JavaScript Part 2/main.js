/*
	Name: Ethan Gonta
	File: index.html
	Date: April 4th, 2024
	 Image gallery

	*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */
const altText = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */

for (let i = i; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic${i}.jpg");
  newImage.setAttribute('alt', "images/pic${i}.jpg");
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */



