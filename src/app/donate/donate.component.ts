import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  slides = [
    {
      quote: '“I am very pleased to say that my experience of associating with Uplift Foundation has been excellent and I feel it is a privilege too. My appreciation for the excellent work Uplift is carrying out in uplifting underprivileged children".',
      profileImage: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid',
      author: 'Jahnvi',
      location: 'Pune'
    },
    {
      quote: "In the journey with Uplift Foundation, I have actually seen desires being converted into reality. It is a great privilege to be a part of Uplift. The philanthropic work creates a great influence on society and changes the minds of people for a brighter future of underprivileged children.",
      profileImage: 'https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=',
      author: 'Jay',
      location: 'Mumbai'
    }
    
  
  ];


  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

    // Method to handle the "Donate Now" button click
    donate() {
      // Redirect to the donation page or trigger a payment gateway
      window.open('https://your-donation-link.com', '_blank');
    }

}
