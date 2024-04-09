import React from 'react';
import './cost.css'; // Import the CSS file

const CostPage = () => {
    return (
        <div className="price_table">
            <div class="package package_free">
              <h2>Free Assessment</h2>
              <div class="price">$<div class="big">0</div></div>
              <p>Sign up today for a free student assessment: </p>
              <ul>
                <li>Evaluation of student outcomes</li>
                <li>Guideline for cirriculum development</li>
                <li>Insight for tutoring recommendations</li>
                <li>Access to secure accreditation</li>
                <li>Ensure student success</li>
              </ul>
              <button>Learn more</button>
            </div>
            <div class="package package_bronze">
              <h2>Monthly</h2>
              <div class="price">$<div class="big">30</div>/mo</div>
              <p>Includes everything in our Free package plus:</p>
              <ul>
                <li>4 hours of tutoring balance</li>
                <li>48 hour notice tutoring appointments</li>
                <li>Obtain session notes</li>
                <li>Access to tutoring discord server</li>
                <li>1 subject limit</li>
              </ul>
              <button>Learn more</button>
            </div>
            <div class="package package_silver">
            <div class="banner">Most Popular</div>
              <h2>Yearly</h2>
              <div class="price">$<div class="big">300</div>/yr</div>
              <p>Includes everything in our Bronze package plus:</p>
              <ul>
                <li>65 hours of tutoring balance</li>
                <li>24 hour notice tutoring appointments</li>
                <li>Obtain educational recommendations</li>
                <li>Advanced tutoring insight*</li>
                <li>2 subject limit</li>
              </ul>
              <button>Learn more</button>
            </div>
            <div class="package package_gold">
              <h2>Membership</h2>
              <div class="price">$<div class="big">15</div>/mo</div>
              <p>Unique membership experience includes:</p>
              <ul>
                <li>50% more tutoring hours</li>
                <li>Drop-in tutoring sessions</li>
                <li>Free monthly assessment consults</li>
                <li>Workshop invitations</li>
                <li>Access to support chat</li>
              </ul>
              <button>Learn more</button>
            </div>
        </div>
    );
};

export default CostPage;
