import React from 'react';
import { StyledHomePage } from '../components/styles/HomePage.styled';
import Layout from '../components/Layout';
import useWindowDimensions from '../components/hooks/useWindowDimensions';

const Home = () => {
  // - Testing useWindowDimensions
  const windowDimensions = useWindowDimensions();

  return (
    <Layout>
      <StyledHomePage>
        {windowDimensions.width <= 800 ? null : (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iste dolorem architecto possimus dolorum officiis, animi
              aspernatur quisquam labore necessitatibus magnam quos eligendi
              incidunt ratione cupiditate suscipit! Eum, consequatur fugit a
              assumenda placeat soluta dolores rem ex magnam tempore temporibus?
            </p>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ut quos reprehenderit possimus expedita consequuntur
              quod eum tempora ipsum, sunt dicta, magnam nulla totam, fugiat
              eveniet similique. Ex possimus iusto sapiente fugiat dicta placeat
              nostrum amet dolorum, facilis velit quia, quam voluptatum repellat
              tenetur eligendi minima non alias, quis autem.
            </p>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae
              alias obcaecati consequatur tenetur excepturi suscipit qui ullam
              repellendus quibusdam illo nihil omnis laudantium, ea, vero
              dignissimos ipsam quas sequi blanditiis libero? Ullam impedit odit
              doloremque, deleniti alias, commodi veritatis harum, quidem
              eligendi laboriosam dolorem quae iusto rem aliquid voluptatum odio
              delectus blanditiis repudiandae incidunt. Eligendi autem, commodi
              id impedit sunt quam ipsam, qui, distinctio culpa esse ratione
              cumque. Eveniet ducimus quisquam, perspiciatis deserunt neque
              voluptatum, voluptates aliquam et tempore obcaecati aspernatur
              veniam officiis quae. Magnam enim doloribus, quod perferendis hic
              nemo dolorem temporibus et obcaecati reiciendis eum dicta
              accusantium.
            </p>
            <br />
            <br />
          </div>
        )}
      </StyledHomePage>
    </Layout>
  );
};

export default Home;
