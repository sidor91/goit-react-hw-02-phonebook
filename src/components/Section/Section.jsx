import { SectionWrapper, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionWrapper>
);

export default Section;
