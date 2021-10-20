import {Wrapper, PageTitle, Form, InputTitle, Input, SubmitBtn} from "../components/styles/Authorization";

const EmailReauthorization = () => {
  return (
    <Wrapper>
      <Form>
        <PageTitle>인증 이메일 재발송</PageTitle>
        <InputTitle>이메일</InputTitle>
        <Input
          type='text'
          name='email'
        />
        <SubmitBtn>인증 이메일 재발송</SubmitBtn>
      </Form>
    </Wrapper>
  )
}

export default EmailReauthorization;