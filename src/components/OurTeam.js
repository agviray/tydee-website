import React from 'react';
import {
  StyledOurTeam,
  StyledContentContainer,
  StyledTeamCarousel,
  StyledItems,
  StyledControl,
} from './styles/OurTeam.styled';
import member01 from '../images/home-page/cleaners/member01.jpg';
import member02 from '../images/home-page/cleaners/member02.jpg';
import member03 from '../images/home-page/cleaners/member03.jpg';
import member04 from '../images/home-page/cleaners/member04.jpg';

const teamMembers = [
  {
    name: 'Michel',
    imgSrc: member01,
    alt: 'Team member Michel',
  },
  {
    name: 'Daria',
    imgSrc: member02,
    alt: 'Team member Daria',
  },
  {
    name: 'Luciano',
    imgSrc: member03,
    alt: 'Team member Luciano',
  },
  {
    name: 'Joel',
    imgSrc: member04,
    alt: 'Team member Joel',
  },
];

const OurTeam = () => {
  return (
    <StyledOurTeam>
      <div className="innerWrapper">
        <div className="headingContainer">
          <h2>MEET OUR TEAM</h2>
        </div>
        <StyledContentContainer>
          <StyledTeamCarousel>
            <div>
              <StyledControl>
                {/* <div>
                  <span>Left</span>
                </div> */}
              </StyledControl>
              <StyledItems>
                {teamMembers.map((member) => (
                  <div key={member.name} className="item">
                    <div className="imageContainer">
                      <figure>
                        <img src={member.imgSrc} alt={member.alt} />
                      </figure>
                    </div>
                    <span className="memberName">{member.name}</span>
                  </div>
                ))}
              </StyledItems>
              {/* <StyledControl>
                <div>
                  <span>Right</span>
                </div>
              </StyledControl> */}
            </div>
          </StyledTeamCarousel>
        </StyledContentContainer>
      </div>
    </StyledOurTeam>
  );
};

export default OurTeam;
