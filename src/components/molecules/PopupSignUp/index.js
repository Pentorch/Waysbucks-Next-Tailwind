import Button from 'src/components/atoms/Button';
import Input from 'src/components/atoms/Input';

export default function PopupSignUp() {
  return (
    <>
      <div className="flex justify-center px-10">
        <div className="">
          <p className="text-color1 mb-[30px] mt-10 font-bold text-4xl">Sign Up</p>
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
