document.addEventListener("DOMContentLoaded", function() {
    const stories = [
      { "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
       "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
       },
      { "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
       "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
       },
      { "title": "Moderna Booster May Wane After 6 Months", 
      "link": "https://time.com/6142852/moderna-booster-wanes-omicron/" 
      },
      { "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme", 
      "link": "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaignpromise/" 
     },
      { "title": "The James Webb Space Telescope Is in Position—And Now We Wait", 
      "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/" 
     },
      { "title": "We Urgently Need a New National COVID-19 Response Plan", 
      "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/" 
     }
    ];
  
    const latestStoriesElement = document.getElementById("latest-stories");
    stories.forEach(story => {
      const storyElement = document.createElement("div");
      storyElement.classList.add("story");
      
      const titleElement = document.createElement("div");
      titleElement.classList.add("title");
      titleElement.textContent = story.title;
      
      const linkElement = document.createElement("a");
      linkElement.classList.add("link");
      linkElement.textContent = "Read more";
      linkElement.href = story.link;
      linkElement.target = "_blank";
      
      storyElement.appendChild(titleElement);
      storyElement.appendChild(linkElement);
      
      latestStoriesElement.appendChild(storyElement);
    });
  });