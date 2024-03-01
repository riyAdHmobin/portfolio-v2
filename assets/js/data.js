// ============== Hero Section ============== //

//  Variables  //

var hero_section_name = "Riyadh Mobin";

var socialMediaLinks = {
    twitter: "https://www.youtube.com/",
    facebook: "https://www.facebook.com/RiyadhMobin/",
    instagram: "https://www.instagram.com/riyadh_mobin/",
    github: "https://github.com/riyAdHmobin",
    linkedin: "https://www.linkedin.com/in/riyadh-mobin-28ab57284/"
};

//  Logic  //

var nameContainer = document.getElementById("hero_section");

nameContainer.innerHTML = "<a>" + hero_section_name + "</a>";

document.getElementById('twitterLink').href = socialMediaLinks.twitter;
document.getElementById('facebookLink').href = socialMediaLinks.facebook;
document.getElementById('instagramLink').href = socialMediaLinks.instagram;
document.getElementById('githubLink').href = socialMediaLinks.github;
document.getElementById('linkedinLink').href = socialMediaLinks.linkedin;

// ============== End Of Hero Section ============== //


// ============== About Section ============== //

//  Variables  //

var subtitle_text = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";

//  Logic  //

var subtitle = document.getElementById("about_section_subtitle");
subtitle.innerHTML = "<a>" + subtitle_text + "</a>";

// ============== End Of About Section ============== //
