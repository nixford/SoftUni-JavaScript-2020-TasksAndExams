function solve() {
   // Get section for fullfilment
   let courseBody = document.querySelector("#myCourses > div.courseBody");
   let costParagraph = document.querySelector("#myCourses > div.courseFoot > p");

   // Get input 
   let sighnMeBtn = document.querySelector("#availableCourses > div.courseFoot > button");

   sighnMeBtn.addEventListener('click', e => {
      e.preventDefault();

      let cbJSFundamentals = document.querySelector("#availableCourses > div.courseBody > ul > li:nth-child(1) > input[type=checkbox]");
      let cbJSAdvanced = document.querySelector("#availableCourses > div.courseBody > ul > li:nth-child(2) > input[type=checkbox]");
      let cbJSApplications = document.querySelector("#availableCourses > div.courseBody > ul > li:nth-child(3) > input[type=checkbox]");
      let cbJSWeb = document.querySelector("#availableCourses > div.courseBody > ul > li:nth-child(4) > input[type=checkbox]");

      let onSite = document.querySelector("#educationForm > input[type=radio]:nth-child(2)");
      let onLine = document.querySelector("#educationForm > input[type=radio]:nth-child(4)");


      let cost = 0;

      if (cbJSFundamentals.checked == true) {
         let liFund = document.createElement('li');
         liFund.innerText = 'JS-Fundamentals';
         courseBody.firstElementChild.appendChild(liFund);

         if (onLine.checked == true) {
            cost = Math.floor(cost + (170 * 0.94));
            costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
         } else {
            cost = Math.floor(cost + 170);
            costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
         }
      }

      if (cbJSAdvanced.checked == true) {
         let liAdv = document.createElement('li');
         liAdv.innerText = 'JS-Advanced';
         courseBody.firstElementChild.appendChild(liAdv);

         if (onLine.checked == true) {
            if (cbJSFundamentals.checked == true) {
               cost = Math.floor(cost + (180 * 0.9) * 0.94);
               costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
            } else {
               costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
            }
         } else {
            cost = Math.floor(cost + 180);
            if (cbJSFundamentals.checked == true) {
               cost = Math.floor(cost + (180 * 0.9));
               costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
            } else {
               costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
            }
         }


      }

      if (cbJSApplications.checked == true) {
         let liApp = document.createElement('li');
         liApp.innerText = 'JS-Applications';
         courseBody.firstElementChild.appendChild(liApp);

         if (onLine.checked == true) {
            cost = Math.floor(cost + (190 * 0.94));
            if (cbJSFundamentals.checked == true && cbJSAdvanced.checked == true) {
               cost = Math.floor(cost * 0.94);
               costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
            } else {
               costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
            }
         } else {
            cost = Math.floor(cost + 190);
            if (cbJSFundamentals.checked == true && cbJSAdvanced.checked == true) {
               cost = Math.floor(cost * 0.94);
               costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
            } else {
               costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
            }
         }


      }

      if (cbJSWeb.checked == true) {
         let liWeb = document.createElement('li');
         liWeb.innerText = 'JS-Web';
         courseBody.firstElementChild.appendChild(liWeb);

         if (onLine.checked == true) {
            cost = Math.floor(cost + (490 * 0.94));
         } else {
            cost = Math.floor(cost + 490);
         }

         costParagraph.innerText = `Cost: ${cost.toFixed(2)} BGN`;
      }

      if (cbJSFundamentals.checked == true && cbJSAdvanced.checked == true && cbJSApplications.checked == true && cbJSWeb.checked == true) {
         let liHTML = document.createElement('li');
         liHTML.innerText = 'HTML and CSS';
         courseBody.firstElementChild.appendChild(liHTML);
      }

   });
}

solve();