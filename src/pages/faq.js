import React from 'react';
import {
  StyledFaq,
  StyledContentContainer,
} from '../components/styles/Faq.styled';
import Layout from '../components/Layout';

const Faq = () => {
  return (
    <Layout>
      <section>
        <StyledFaq>
          <div className="innerWrapper">
            <div className="headingContainer">
              <h2>FAQ</h2>
              <p>The Ins And Outs of How We Do Business</p>
            </div>
            <StyledContentContainer>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                velit ducimus modi perferendis iusto est vitae quasi corrupti
                aliquam ipsam magni eius laudantium esse non voluptate molestias
                fuga, eos suscipit.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, sequi voluptate! Nisi vero consequatur ratione
                aliquid mollitia non adipisci accusamus, rem tenetur
                reprehenderit excepturi repudiandae odit voluptatibus quasi unde
                suscipit. Minus, similique? Culpa nemo ullam ea eius atque,
                impedit illum quo harum reiciendis itaque provident deleniti
                voluptatum quis praesentium fugit.
              </p>
            </StyledContentContainer>
          </div>
        </StyledFaq>
      </section>
    </Layout>
  );
};

export default Faq;
