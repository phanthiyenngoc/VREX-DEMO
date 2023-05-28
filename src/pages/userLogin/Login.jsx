import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import backgroundURL from "../../assets/Image/Rectangle3043.svg";
import { Typography, useTheme, Input } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

Login.propTypes = {};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone_number: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example"));
  return (
    <div
      css={css`
        display: inline-block;

        width: 500px;
        margin: 0 auto;
        @media (max-width: ${theme.breakpoints.values.md - 1}px) {
          max-width: 500px;
          width: 100%;
        }
      `}
    >
      <form
        css={css`
          width: 100%;
        `}
      >
        <div
          css={css`
            background-image: url(${backgroundURL});
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            margin: auto;
          `}
        >
          <p
            css={css`
              font-family: "SFU Eurostile";
              font-style: normal;
              font-weight: 400;
              font-size: 20px;
              line-height: 28px;
              /* identical to box height, or 140% */

              text-align: center;

              /* Brand / 2 */

              color: #440656;
            `}
          >
            Đăng nhập
          </p>
        </div>
        <div
          css={css`
            height: 56px;
          `}
        >
          <TextField
            css={css`
              width: 100%;
            `}
            id="outlined-basic"
            label="Số điện thoại / Email"
            variant="outlined"
            {...register("phone_number", { required: true })}
          />
        </div>
        {/* register your input into the hook by invoking the "register" function */}

        {errors.phone_number && <p>This field is required</p>}

        {/* include validation with required or other standard HTML validation rules */}

        <div
          css={css`
            height: 56px;
            margin-top: 24px;
            margin-bottom: 24px;
          `}
        >
          <Input
            type={showPassword ? "text" : "password"}
            css={css`
              width: 100%;
            `}
            id="outlined-basic"
            label="Mật khẩu"
            variant="outlined"
            {...register("password", { required: true })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.password && <p>This field is required</p>}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
          `}
        >
          <div>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Lưu tài khoản"
            />
          </div>
          <Button variant="text">Quên mật khẩu?</Button>
        </div>
        <div
          css={css`
            margin-bottom: 24px;
          `}
        >
          <Button
            css={css`
              width: 100%;
              background: ${theme.palette.secondary.main};
              color: white;
              &:hover {
                background: ${theme.palette.secondary.main};
                opacity: 0.9;
              }
            `}
            variant="contained"
          >
            Đăng nhập
          </Button>
        </div>
        <div>
          <Button
            css={css`
              width: 100%;

              color: ${theme.palette.secondary.main};
              &:hover {
                color: ${theme.palette.secondary.main};
                background: rgba(243, 117, 6, 0.1);
              }
            `}
            variant="text"
          >
            Tạo tài khoản mới
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
