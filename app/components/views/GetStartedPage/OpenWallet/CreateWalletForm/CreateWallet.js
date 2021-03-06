import { KeyBlueButton } from "buttons";
import { FormattedMessage as T } from "react-intl";
import { SeedCopyConfirmModal } from "modals";
import { UnselectableText } from "shared";
import "style/CreateWalletForm.less";

const CreateWallet = ({
  mnemonic,
  createWalletConfirmNewSeed,
  handleCopySeed,
  showCopySeedConfirm,
  onCancelCopySeedConfirm,
  onSubmitCopySeedConfirm
}) => (
  <Aux>
    <div className="page-content new-seed">
      <div className="help-text">
        <div className="paragraph left">
          <T id="createWallet.info" m={`
            Wallets are determinstically generated by a wallet seed. The seed is
            a master key of your wallet and the entire wallet can be recreated at
            any time using it. If the wallet encryption passphrase is forgotten
            or the wallet is destroyed, the seed can be used to recover the wallet.`} />
          <br/>
          <span className="cyan-bold">
            <T id="creteWallet.writeSeedReminder" m="Write down the following seed and save it in a secure location."/>
          </span>
          <br/>
          <br/>
          <span className="cyan-regular">
            <T id="createWallet.nextPromptSeed" m="The next prompt will require entering this seed to confirm it has been saved."/>
          </span>
        </div>
        <div className="paragraph right">
          <T id="createWallet.lossInfo" m={`
            To help avoid permanent loss of your wallet, the seed must be backed up before continuing.

            {warningNotice} Failure to keep this seed private can result in the theft of your entire wallet. Under no circumstances should this seed ever be revealed to someone else.
            `}
          values={{
            warningNotice: <span className="orange-warning"><T id="createWallet.warningNotice" m="Warning"/></span>
          }}
          />
        </div>
      </div>
      <div className="seed">
        <UnselectableText>{mnemonic}</UnselectableText>
        <a className="copy-to-clipboard-icon" onClick={handleCopySeed}>Copy to Clipboard</a>
      </div>
      <KeyBlueButton className="wallet-key-blue-button" onClick={createWalletConfirmNewSeed}>
        <T id="createWallet.continueBtn" m="Continue" />
      </KeyBlueButton>
    </div>
    <SeedCopyConfirmModal
      show={showCopySeedConfirm}
      onSubmit={onSubmitCopySeedConfirm}
      onCancelModal={onCancelCopySeedConfirm}
    />
  </Aux>
);

export default CreateWallet;
