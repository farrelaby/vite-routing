import React from 'react';

const SignIn = () => {
  return (
    <div className='px-[15px] w-screen font-[Montserrat] '>
      <div className='flex flex-row justify-center'>
        <img
          className='md:mt-[70px] md:w-[360px] md:h-[163.72px] min-[393px]:mt-[27px] min-[393px]:w-[171px] min-[393px]:h-[78px]'
          alt=''
          src='/static/LogoNaqosFix.png'
        />
      </div>
      <div className='flex flex-col justify-center mx-auto md:mt-[48px] md:w-[526px] min-[393px]:mt-[18px]'>
        <span className='md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
          Email
        </span>
        <input
          className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#46464f]/40 border-2 border-[#46464f]/20 focus:outline-none focus:border-[#0A008A]'
          type=''
          placeholder='Ketikkan alamat email'
        />
        <span className='md:mt-[20px] md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mt-[14px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
          Password
        </span>
        <input
          className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#46464f]/40 border-2 border-[#46464f]/20 focus:outline-none focus:border-[#0A008A]'
          type='password'
          placeholder='Minimal 6 karakter'
        />
        <img
          className='absolute pointer-events-none md:mt-[110px] md:ml-[480px] min-[393px]:mt-[115px] min-[393px]:ml-[330px]'
          src='src/assets/icon_eye-slash.svg'
        />
        <a
          href='#'
          className='md:mt-[12px] md:text-[16px] md:font-[600] min-[393px]:text-[14px] min-[393px]:font-[500px] min-[393px]:mt-1 text-left text-black hover:text-black'
        >
          Lupa Password
        </a>
      </div>
      <div className='flex flex-row justify-center md:mt-[29px] min-[393px]:mt-[20px]'>
        <button
          className='md:w-[481px] md:h-[43px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none'
          type='submit'
        >
          Masuk
        </button>
      </div>
      <div className='flex flex-row justify-center md:mt-[21px] min-[393px]:mt-[20px]'>
        <hr className='md:mt-3 md:w-[195px] min-[393px]:w-[160px] min-[393px]:mt-3 bg-[#999999] border-1 border-[#999999]' />
        <p className='md:text-[24px] min-[393px]:text-[12px] w-max mx-2 font-[600] text-[#999999]'>
          atau
        </p>
        <hr className='md:mt-3 md:w-[195px] min-[393px]:w-[160px] min-[393px]:mt-3 bg-[#999999] border-1 border-[#999999]' />
      </div>
      <div className='flex flex-row justify-center md:mt-[16px] min-[393px]:mt-[20px]'>
        <button
          className='md:w-[481px] md:h-[44.96px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-white border-2 border-[#E9E9EA] outline-none rounded-[150px] font-[600] text-[#B9B9BC] hover:bg-[#E9E9EA] hover:text-white hover:border-[#E9E9EA] focus:border-[#0A008A] focus:bg-white focus:text-[#0A008A] focus:outline-none'
          type='submit'
        >
          Masuk dengan Google
        </button>
        <img
          className='absolute md:mt-3 md:mr-[230px] min-[393px]:mt-2 min-[393px]:mr-[200px]'
          src='src/assets/icon_google.svg'
        />
      </div>
      <div className='flex flex-row justify-center md:mt-[16px] min-[393px]:mt-[20px]'>
        <p className='md:text-[16px] min-[393px]:text-[14px] text-center text-black font-[600]'>
          Belum punya akun?{' '}
          <a className='text-[#0A008A] hover:text-[#0A008A]' href='/register'>
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
