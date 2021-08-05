const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Masha Marcelle',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nulla architecto animi mollitia debitis consectetur distinctio nihil, laboriosam accusamus dignissimos officiis nostrum autem excepturi a deserunt minus, molestias aspernatur aliquid.',
  },
  {
    name: 'Jaimie Smith',
    position: 'Sales',
    photo: 'https://randomuser.me/api/portraits/women/32.jpg',
    text: 'Optio nulla architecto animi mollitia debitis consectetur distinctio nihil, laboriosam accusamus dignissimos officiis nostrum autem excepturi a deserunt minus, molestias aspernatur aliquid. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Anna Magardich',
    position: 'Promotions',
    photo: 'https://randomuser.me/api/portraits/women/31.jpg',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nulla architecto animi mollitia debitis consectetur distinctio nihil, laboriosam accusamus dignissimos officiis nostrum autem excepturi a deserunt minus, molestias aspernatur aliquid.',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
