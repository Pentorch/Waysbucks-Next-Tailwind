import Button from 'src/components/atoms/Button';
import Icons from 'src/components/atoms/Icons';
import Input from 'src/components/atoms/Input';

export default function PopupSignUp({ setShow }) {
  return (
    <>
      <div className="flex justify-center px-10">
        <div className="">
          <div className="flex items-stretch justify-between mb-[30px] mt-[50px]">
            <p className="text-color1  font-bold text-4xl mt-[-15px]">Sign Up</p>
            <button type="button" onClick={() => setShow(false)}>
              <Icons.Close />
            </button>
          </div>
          <Input placeholder="Email" touched={true} inputClassName="mb-5 w-[350px]" />
          <Input placeholder="Password" touched={true} inputClassName="mb-[30px] w-[350px]" />

          <Button className="bg-color1 text-white rounded mt-4 w-[350px]">Sign Up</Button>
          <p className="text-lg font-normal text-center mt-5">
            Don`t have an account ?<span className="font-bold">Klik Here</span>
          </p>
        </div>
      </div>
    </>
  );
}
