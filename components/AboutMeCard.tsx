import Image from 'next/image'
import styled from 'styled-components'

const AboutCard = styled.div`
  /* position: absolute; */
  width: 335px;
  height: 400.61px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
      139.86deg,
      #db7093 1.73%,
      rgba(154, 69, 238, 0.31563) 47.92%,
      rgba(134, 51, 239, 0.177083) 91.06%,
      rgba(186, 132, 255, 0) 99.18%
    ),
    #406cdd;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 10px 10px 27px rgba(0, 0, 0, 0.23);
  border-radius: 10px;

  img {
    position: relative;
    top: -50px;
    width: 160px;
    border-radius: 50%;
  }
  button {
    position: relative;
    bottom: -35px;
    width: 222px;
    height: 69px;

    background: #7998ff;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    border-radius: 15px;
    border: none;
  }
`

function AboutMeCard() {
  return (
    <>
      <AboutCard>
        <Image
          src="https://avatars2.githubusercontent.com/u/50870173?s=460&v=4"
          alt="photo of karnell"
        />
        <a className="button" href=""></a>
      </AboutCard>
    </>
  )
}
export { AboutMeCard }
