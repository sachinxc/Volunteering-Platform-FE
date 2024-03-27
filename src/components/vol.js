import React, { useState } from "react";
import Flex from "../Styles/styledComponent/Flex";
import "./vol.css"; // Import CSS file

function VolunteerExplorerPage() {
  // Define state variables for filters
  const [locationFilter, setLocationFilter] = useState("");
  const [skillLevelFilter, setSkillLevelFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Dummy data for volunteer campaigns
  const campaigns = [
    {
      id: 1,
      title: "Campaign 1",
      category: "Humanitarian",
      location: "New York",
      skillLevel: "Beginner",
    },
    {
      id: 2,
      title: "Campaign 2",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 3,
      title: "Campaign 3",
      category: "Animals",
      location: "Colombo",
      skillLevel: "Advanced",
    },
    {
      id: 4,
      title: "Campaign 4",
      category: "Humanitarian",
      location: "Los Angeles",
      skillLevel: "Beginner",
    },
    {
      id: 5,
      title: "Campaign 5",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 6,
      title: "Campaign 6",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 7,
      title: "Campaign 7",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 8,
      title: "Campaign 8",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 9,
      title: "Campaign 9",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 10,
      title: "Campaign 10",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    // Add more campaign data with locations as Colombo, New York, or Los Angeles
    {
      id: 11,
      title: "Campaign 11",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 12,
      title: "Campaign 12",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 13,
      title: "Campaign 13",
      category: "Humanitarian",
      location: "Los Angeles",
      skillLevel: "Beginner",
    },
    {
      id: 14,
      title: "Campaign 14",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 15,
      title: "Campaign 15",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 16,
      title: "Campaign 16",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 17,
      title: "Campaign 17",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 18,
      title: "Campaign 18",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 19,
      title: "Campaign 19",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 20,
      title: "Campaign 20",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 21,
      title: "Campaign 21",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 22,
      title: "Campaign 22",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 23,
      title: "Campaign 23",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 24,
      title: "Campaign 24",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 25,
      title: "Campaign 25",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 26,
      title: "Campaign 26",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 27,
      title: "Campaign 27",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 28,
      title: "Campaign 28",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 29,
      title: "Campaign 29",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 30,
      title: "Campaign 30",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
  ];

  // Function to filter campaigns based on location and skill level
  const filteredCampaigns = campaigns.filter((campaign) => {
    const locationMatch =
      !locationFilter ||
      campaign.location.toLowerCase().includes(locationFilter.toLowerCase());
    const skillLevelMatch =
      !skillLevelFilter ||
      campaign.skillLevel.toLowerCase() === skillLevelFilter.toLowerCase();
    const categoryMatch =
      !categoryFilter ||
      campaign.category.toLowerCase() === categoryFilter.toLowerCase();
    return locationMatch && skillLevelMatch && categoryMatch;
  });

  return (
    <Flex
      dir="column"
      css={{
        width: "100%",
        height: "100%",
        padding: "50px",
        backgroundColor: "rgb(0 192 177)",
        borderRadius: "20px",
        //animation: "0.4s ease-in 0.4s 1 both " + fadein,
      }}
    >
      <h2 className="spageheading">Explore Volunteering Opportunities</h2>{" "}
      {/* Heading Text */}
      {/* Filters Grid */}
      <div className="filters-grid">
        {/* Location Filter */}
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Colombo">Colombo</option>
          {/* Add more location options if needed */}
        </select>
        {/* Skill Level Filter */}
        <select
          value={skillLevelFilter}
          onChange={(e) => setSkillLevelFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">All Skill Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          {/* Add more skill level options if needed */}
        </select>
        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">All Categories</option>
          <option value="Humanitarian">Humanitarian</option>
          <option value="Environment">Environment</option>
          <option value="Animals">Animals</option>
          {/* Add more skill level options if needed */}
        </select>
      </div>
      {/* Display filtered campaigns */}
      <div className="filtered-results-section">
        <div className="campaign-grid">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <h3>{campaign.title}</h3>
              <p>Location: {campaign.location}</p>
              <p>Skill Level: {campaign.skillLevel}</p>
              <p>Category: {campaign.category}</p>
            </div>
          ))}
        </div>
      </div>
    </Flex>
  );
}

export default VolunteerExplorerPage;
