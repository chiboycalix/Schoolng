import './styles.scss';
import SmileImg from '../../assets/img/withschoolnimg.png';

const WithSchoolng = () => {
  return (
    <div className="withSchoolngWrapper">
      <div className="withSchoolngWrapperLeft">
        <img src={SmileImg} alt="SmileImg" />
      </div>
      <div className="withSchoolngWrapperRight">
        <h1>With Schooln.ng you:</h1>
        <div className="withSchoolngWrapperRightContent">
          <div className="withSchoolngWrapperRightContentRow">
            <div className="serialNumberWrapper">
              <p>01</p>
              <div className="verticalLine"></div>
            </div>
            <div className="withSchoolngText">
              <p>Connect: schooln.ng helps you connect with peers, students, business, materials & trends:</p>
            </div>
          </div>

          <div className="withSchoolngWrapperRightContentRow">
            <div className="serialNumberWrapper">
              <p>02</p>
              <div className="verticalLine"></div>
            </div>
            <div className="withSchoolngText">
              <p>Grow: Schooln.ng empower students to build and grow businesses around and beyond their schools while growing academically through</p>
            </div>
          </div>

          <div className="withSchoolngWrapperRightContentRow">
            <div className="serialNumberWrapper">
              <p>03</p>
            </div>
            <div className="withSchoolngText">
              <p>Bond: schooln.ng encourages students to create friend among themselves, you get to connect with people form outside your school</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WithSchoolng;